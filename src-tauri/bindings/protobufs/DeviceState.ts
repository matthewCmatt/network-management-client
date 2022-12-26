// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { MeshPacket } from "./MeshPacket";
import type { MyNodeInfo } from "./MyNodeInfo";
import type { NodeInfo } from "./NodeInfo";
import type { User } from "./User";

export interface DeviceState { myNode: MyNodeInfo | null, owner: User | null, nodeDb: Array<NodeInfo>, receiveQueue: Array<MeshPacket>, version: number, rxTextMessage: MeshPacket | null, noSave: boolean, didGpsReset: boolean, }