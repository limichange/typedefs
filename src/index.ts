// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Poc3 from './phala-poc3';
import Poc4 from './phala-poc4';
import Latest from './phala-latest';

// alphabetical
export const typesChain = {
  'Phala PoC-3': Poc3,
  'Phala PoC-4': Poc4,
  'Phala Local Testnet': Poc4,
  'Integration Test': Latest,
  'Staging Testnet': Latest,
  'Phala Development': Latest,
  'Local Testnet': Latest,
};

export const latest = Latest;