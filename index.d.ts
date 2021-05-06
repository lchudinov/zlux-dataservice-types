
/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html

  SPDX-License-Identifier: EPL-2.0

  Copyright Contributors to the Zowe Project.
*/

import { Router } from 'express';

export type StorageLocationType = 'ha' | 'cluster' | 'local';

type Dict = { [key: string]: any };

export interface PluginStorage {
  get(key: string, storageType?: StorageLocationType): Promise<any>;
  getAll(storageType?: StorageLocationType): Promise<Dict>;
  set(key: string, value: any, storageType?: StorageLocationType): Promise<void>;
  setAll(dict: Dict, storageType?: StorageLocationType): Promise<void>;
  delete(key: string, storageType?: StorageLocationType): Promise<void>;
  deleteAll(storageType?: StorageLocationType): Promise<void>;
}

/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html

  SPDX-License-Identifier: EPL-2.0

  Copyright Contributors to the Zowe Project.
*/

export interface DataServiceContext {
  storage: PluginStorage;
  addBodyParseMiddleware: (router: Router) => void;
}
