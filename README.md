
## Quickstart

You can build and run the Flat client without a server. This repository includes the following projects:

-   [Flat Electron client](./desktop) is an Electron implementation of Flat client.
-   [Flat Web client](./web) is a web implementation of Flat client.

### Installation

> If you don't have pnpm installed:
>
> ```bash
> npm i -g pnpm
> ```

Clone or fork this project, at project root run:

```bash
pnpm i
```

### Build and run Flat Electron client

Run the following commands at the root of the repository to build and run Flat Electron client.

```shell
pnpm start
```

You can use one of the following methods to package your executable:

-   Run `pnpm ship` at project root to package based on current system.
-   Alternatively, run `pnpm ship:mac` or `pnpm ship:win` at project root to package for a specified system.

### Build and run Flat Web client

Run the following command at the root of the repository to build and run Flat web client.

```shell
pnpm start:web
```

Alternatively, run the following command:

```shell
cd ./web/flat-web/ && pnpm start
```

UI and business logic are separated in Flat. You can view and develop Flat components UI via Storybook. You can either visit the ([Online address][flat-storybook]) or run `pnpm storybook` at the root of the repository to run Storybook locally.

## References

-   [Release Version Description](docs/releases)
-   [Environment Variables Reference](docs/env/README.md)
-   [Debugging Flat](docs/debugging/README.md)

## Disclaimer

You may use Flat for commercial purposes but please note that we do not accept customizational commercial requirements and deployment supports. Nor do we offer customer supports for commercial usage. Please head to [Flexible Classroom](https://www.agora.io/en/products/flexible-classroom) for such requirements.

