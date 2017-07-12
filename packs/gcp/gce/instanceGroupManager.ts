// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class InstanceGroupManager extends lumi.NamedResource implements InstanceGroupManagerArgs {
    public readonly baseInstanceName: string;
    public readonly description?: string;
    public readonly fingerprint?: string;
    public readonly instanceGroup?: string;
    public readonly instanceTemplate: string;
    public readonly _name: string;
    public readonly namedPort?: { _name: string, port: number }[];
    public readonly project?: string;
    public readonly selfLink?: string;
    public readonly targetPools?: string[];
    public readonly targetSize?: number;
    public readonly updateStrategy?: string;
    public readonly zone: string;

    constructor(name: string, args: InstanceGroupManagerArgs) {
        super(name);
        this.baseInstanceName = args.baseInstanceName;
        this.description = args.description;
        this.fingerprint = args.fingerprint;
        this.instanceGroup = args.instanceGroup;
        this.instanceTemplate = args.instanceTemplate;
        this._name = args._name;
        this.namedPort = args.namedPort;
        this.project = args.project;
        this.selfLink = args.selfLink;
        this.targetPools = args.targetPools;
        this.targetSize = args.targetSize;
        this.updateStrategy = args.updateStrategy;
        this.zone = args.zone;
    }
}

export interface InstanceGroupManagerArgs {
    readonly baseInstanceName: string;
    readonly description?: string;
    readonly fingerprint?: string;
    readonly instanceGroup?: string;
    readonly instanceTemplate: string;
    readonly _name: string;
    readonly namedPort?: { _name: string, port: number }[];
    readonly project?: string;
    readonly selfLink?: string;
    readonly targetPools?: string[];
    readonly targetSize?: number;
    readonly updateStrategy?: string;
    readonly zone: string;
}

