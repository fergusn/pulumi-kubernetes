// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class BackendBucket extends lumi.NamedResource implements BackendBucketArgs {
    public readonly bucketName: string;
    public readonly description?: string;
    public readonly enableCdn?: boolean;
    public readonly _name: string;
    public readonly project?: string;
    public readonly selfLink?: string;

    constructor(name: string, args: BackendBucketArgs) {
        super(name);
        this.bucketName = args.bucketName;
        this.description = args.description;
        this.enableCdn = args.enableCdn;
        this._name = args._name;
        this.project = args.project;
        this.selfLink = args.selfLink;
    }
}

export interface BackendBucketArgs {
    readonly bucketName: string;
    readonly description?: string;
    readonly enableCdn?: boolean;
    readonly _name: string;
    readonly project?: string;
    readonly selfLink?: string;
}

