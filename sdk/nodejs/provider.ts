import * as pulumi from "@pulumi/pulumi";

/**
 * The provider type for the kubernetes package.
 */
export class Provider extends pulumi.ProviderResource {
    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProviderArgs, opts?: pulumi.ResourceOptions) {
        let inputs: pulumi.Inputs = {
            "cluster": args ? args.cluster : undefined,
            "context": args ? args.context : undefined,
            "kubeconfig": args ? args.kubeconfig : undefined,
            "namespace": args ? args.namespace : undefined,
        };
        super("kubernetes", name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Provider.
 */
export interface ProviderArgs {
    /**
     * If present, the name of the kubeconfig cluster to use.
     */
    readonly cluster?: pulumi.Input<string>;
    /**
     * If present, the name of the kubeconfig context to use.
     */
    readonly context?: pulumi.Input<string>;
    /**
     * The contents of a kubeconfig file. If this is set, this config will be used instead of $KUBECONFIG.
     */
    readonly kubeconfig?: pulumi.Input<string>;
    /**
     * If present, the namespace scope to use.
     */
    readonly namespace?: pulumi.Input<string>;
}
