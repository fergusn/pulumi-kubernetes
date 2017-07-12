// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Topic extends lumi.NamedResource implements TopicArgs {
    public readonly _name: string;
    public readonly project?: string;

    constructor(name: string, args: TopicArgs) {
        super(name);
        this._name = args._name;
        this.project = args.project;
    }
}

export interface TopicArgs {
    readonly _name: string;
    readonly project?: string;
}

