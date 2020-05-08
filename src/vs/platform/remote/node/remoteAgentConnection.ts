/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Client, Protocol } from 'vs/base/parts/ipc/node/ipc.net';
import { IExtensionHostDebugParams } from 'vs/platform/environment/common/environment';

export interface RemoteAgentConnectionContext {
	remoteAuthority: string;
	clientId: string;
}

export function connectRemoteAgentManagement(remoteAuthority: string, host: string, port: number, clientId: string): Promise<Client<RemoteAgentConnectionContext>> {
	throw new Error(`Not implemented`);
}

export interface IExtensionHostConnectionResult {
	protocol: Protocol;
	debugPort?: number;
}

export function connectRemoteAgentExtensionHost(host: string, port: number, debugArguments: IExtensionHostDebugParams): Promise<IExtensionHostConnectionResult> {
	throw new Error(`Not implemented`);
}
