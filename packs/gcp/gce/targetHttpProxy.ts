// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class TargetHttpProxy extends lumi.NamedResource implements TargetHttpProxyArgs {
    public readonly description?: string;
    public readonly _id?: string;
    public readonly _name: string;
    public readonly project?: string;
    public readonly selfLink?: string;
    public readonly urlMap: string;

    constructor(name: string, args: TargetHttpProxyArgs) {
        super(name);
        this.description = args.description;
        this._id = args._id;
        this._name = args._name;
        this.project = args.project;
        this.selfLink = args.selfLink;
        this.urlMap = args.urlMap;
    }
}

export interface TargetHttpProxyArgs {
    readonly description?: string;
    readonly _id?: string;
    readonly _name: string;
    readonly project?: string;
    readonly selfLink?: string;
    readonly urlMap: string;
}

