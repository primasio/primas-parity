## Primas Parity

The Parity Ethereum client running behind Primas Node

Deploy with docker-compose.

Parity configuration is loaded from config.toml.
Copy config.development.toml or config.production.toml
to config.toml and adjust the parameter values according
to your environment before running.


```bash
cp config.development.toml config.toml
docker-compose up -d
```

The project root directory is binding to the docker container.
Parity data is stored in "data" directory.

Test if the node is started successfully:

```bash
npm install
npm test
```

Note that Kovan network from Parity is not compatible with Ropsten & Foundation
network of Ethereum. As the usage of PoA consensus in Kovan which does not
compute hash in block, blocks in Kovan network do not contain "mixHash" field,
which causes Geth client library throws exception when parsing block data.
As a consequence clients using Geth library can not be tested in Ropsten network.