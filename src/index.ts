// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import poc3 from './phala-poc3';
import poc4 from './phala-poc4';
import dev from './phala-dev';


// alphabetical
export const typesChain = {
  'Phala PoC-3': poc3,
  'Phala PoC-4': poc4,
  'Phala PoC-Next': dev,
  'Phala Local Testnet': poc4,
  'Phala Integration Test': dev,
  'Phala Staging Testnet': dev,
  'Phala Development': dev,
};

export {
  poc3,
  poc3 as Poc3,

  poc4,
  poc4 as Poc4,

  dev,
  dev as Dev,
  dev as latest,
  dev as Latest,
}
