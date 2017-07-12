// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Firewall extends lumi.NamedResource implements FirewallArgs {
    public readonly allow: { ports?: string[], protocol: string }[];
    public readonly description?: string;
    public readonly _name: string;
    public readonly network: string;
    public readonly project?: string;
    public readonly selfLink?: string;
    public readonly sourceRanges?: string[];
    public readonly sourceTags?: string[];
    public readonly targetTags?: string[];

    constructor(name: string, args: FirewallArgs) {
        super(name);
        this.allow = args.allow;
        this.description = args.description;
        this._name = args._name;
        this.network = args.network;
        this.project = args.project;
        this.selfLink = args.selfLink;
        this.sourceRanges = args.sourceRanges;
        this.sourceTags = args.sourceTags;
        this.targetTags = args.targetTags;
    }
}

export interface FirewallArgs {
    readonly allow: { ports?: string[], protocol: string }[];
    readonly description?: string;
    readonly _name: string;
    readonly network: string;
    readonly project?: string;
    readonly selfLink?: string;
    readonly sourceRanges?: string[];
    readonly sourceTags?: string[];
    readonly targetTags?: string[];
}

