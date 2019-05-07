// Copyright 2016-2019, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package ints

import (
	"os"
	"testing"

	"github.com/pulumi/pulumi/pkg/tokens"

	"github.com/pulumi/pulumi-kubernetes/pkg/openapi"
	"github.com/pulumi/pulumi-kubernetes/tests"
	"github.com/pulumi/pulumi/pkg/resource"
	"github.com/pulumi/pulumi/pkg/resource/deploy/providers"
	"github.com/pulumi/pulumi/pkg/testing/integration"
	"github.com/stretchr/testify/assert"
)

func TestProvider(t *testing.T) {
	kubectx := os.Getenv("KUBERNETES_CONTEXT")

	if kubectx == "" {
		t.Skipf("Skipping test due to missing KUBERNETES_CONTEXT variable")
	}

	integration.ProgramTest(t, &integration.ProgramTestOptions{
		Dir:          "step1",
		Dependencies: []string{"@pulumi/kubernetes"},
		Quick:        true,
		ExtraRuntimeValidation: func(t *testing.T, stackInfo integration.RuntimeValidationStackInfo) {
			assert.NotNil(t, stackInfo.Deployment)
			assert.Equal(t, 7, len(stackInfo.Deployment.Resources))

			tests.SortResourcesByURN(stackInfo)

			stackRes := stackInfo.Deployment.Resources[6]
			assert.Equal(t, resource.RootStackType, stackRes.URN.Type())

			k8sProvider := stackInfo.Deployment.Resources[5]
			assert.True(t, providers.IsProviderType(k8sProvider.URN.Type()))

			defaultProvider := stackInfo.Deployment.Resources[4]
			assert.True(t, providers.IsProviderType(defaultProvider.URN.Type()))

			// Assert the provider Namespace was created
			providerNamespace := stackInfo.Deployment.Resources[0]
			assert.Equal(t, tokens.Type("kubernetes:core/v1:Namespace"), providerNamespace.URN.Type())
			providerNsName, _ := openapi.Pluck(providerNamespace.Outputs, "metadata", "name")

			// Assert the other Namespace was created despite the provider override.
			otherNamespace := stackInfo.Deployment.Resources[1]
			assert.Equal(t, tokens.Type("kubernetes:core/v1:Namespace"), otherNamespace.URN.Type())
			nsName, _ := openapi.Pluck(otherNamespace.Outputs, "metadata", "name")
			assert.NotEqual(t, nsName, providerNsName)

			// Assert the Pod was created in the provider namespace.
			pod := stackInfo.Deployment.Resources[3]
			assert.Equal(t, "nginx", string(pod.URN.Name()))
			podNamespace, _ := openapi.Pluck(pod.Outputs, "metadata", "namespace")
			assert.Equal(t, providerNamespace.ID.String(), podNamespace.(string))

			// Assert the Pod was created in the provider namespace rather than the specified namespace.
			namespacedPod := stackInfo.Deployment.Resources[2]
			assert.Equal(t, "namespaced-nginx", string(namespacedPod.URN.Name()))
			namespacedPodNamespace, _ := openapi.Pluck(namespacedPod.Outputs, "metadata", "namespace")
			assert.Equal(t, providerNamespace.ID.String(), namespacedPodNamespace.(string))
		},
	})
}