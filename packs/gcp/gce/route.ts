// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Route extends lumi.NamedResource implements RouteArgs {
    public readonly destRange: string;
    public readonly _name: string;
    public readonly network: string;
    public readonly nextHopGateway?: string;
    public readonly nextHopInstance?: string;
    public readonly nextHopInstanceZone?: string;
    public readonly nextHopIp?: string;
    public readonly nextHopNetwork?: string;
    public readonly nextHopVpnTunnel?: string;
    public readonly priority: number;
    public readonly project?: string;
    public readonly selfLink?: string;
    public readonly tags?: string[];

    constructor(name: string, args: RouteArgs) {
        super(name);
        this.destRange = args.destRange;
        this._name = args._name;
        this.network = args.network;
        this.nextHopGateway = args.nextHopGateway;
        this.nextHopInstance = args.nextHopInstance;
        this.nextHopInstanceZone = args.nextHopInstanceZone;
        this.nextHopIp = args.nextHopIp;
        this.nextHopNetwork = args.nextHopNetwork;
        this.nextHopVpnTunnel = args.nextHopVpnTunnel;
        this.priority = args.priority;
        this.project = args.project;
        this.selfLink = args.selfLink;
        this.tags = args.tags;
    }
}

export interface RouteArgs {
    readonly destRange: string;
    readonly _name: string;
    readonly network: string;
    readonly nextHopGateway?: string;
    readonly nextHopInstance?: string;
    readonly nextHopInstanceZone?: string;
    readonly nextHopIp?: string;
    readonly nextHopNetwork?: string;
    readonly nextHopVpnTunnel?: string;
    readonly priority: number;
    readonly project?: string;
    readonly selfLink?: string;
    readonly tags?: string[];
}

