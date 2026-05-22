import { Button, Table, TableBody, TableCell, TableRow } from "flowbite-react";

export function FinancialTradingCTASection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center px-4 py-8 text-center sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Buy crypto at true cost
          </h2>
          <p className="mb-6 text-gray-500 dark:text-gray-400 md:text-lg lg:mb-16">
            Buy and sell 250+ cryptocurrencies with 20+ fiat currencies using
            bank transfers or your credit/debit card.
          </p>
        </div>
        <div className="relative mb-8 w-full overflow-x-auto">
          <Table>
            <TableBody className="divide-y">
              <TableRow>
                <TableCell
                  scope="row"
                  className="bg-transparent text-xl font-bold text-gray-900 dark:bg-transparent dark:text-white"
                >
                  Bitcoin&nbsp;
                  <span className="text-gray-500 dark:text-gray-400">BTC</span>
                </TableCell>
                <TableCell className="text-xl font-bold text-gray-900 dark:text-white">
                  $38,716.43
                </TableCell>
                <TableCell className="text-sm font-semibold text-red-500">
                  -10.82%
                </TableCell>
                <TableCell className="font-semibold text-gray-900 dark:text-white">
                  $729,729,745,340.82
                </TableCell>
                <TableCell className="flex justify-end">
                  <Button color="info">Trade</Button>
                </TableCell>
              </TableRow>
              <TableRow className="border-b dark:border-gray-700">
                <TableCell
                  scope="row"
                  className="bg-transparent text-xl font-bold text-gray-900 dark:bg-transparent dark:text-white"
                >
                  Ethereum&nbsp;
                  <span className="text-gray-500 dark:text-gray-400">ETH</span>
                </TableCell>
                <TableCell className="text-xl font-bold text-gray-900 dark:text-white">
                  $2,818.15
                </TableCell>
                <TableCell className="text-sm font-semibold text-red-500">
                  -13.88%
                </TableCell>
                <TableCell className="font-semibold text-gray-900 dark:text-white">
                  $333,396,739,452.23
                </TableCell>
                <TableCell className="flex justify-end">
                  <Button color="info">Trade</Button>
                </TableCell>
              </TableRow>
              <TableRow className="border-b dark:border-gray-700">
                <TableCell
                  scope="row"
                  className="bg-transparent text-xl font-bold text-gray-900 dark:bg-transparent dark:text-white"
                >
                  Cardano&nbsp;
                  <span className="text-gray-500 dark:text-gray-400">ADA</span>
                </TableCell>
                <TableCell className="text-xl font-bold text-gray-900 dark:text-white">
                  $1.22
                </TableCell>
                <TableCell className="text-sm font-semibold text-green-500">
                  +3.76%
                </TableCell>
                <TableCell className="font-semibold text-gray-900 dark:text-white">
                  $40,465,663,783.16
                </TableCell>
                <TableCell className="flex justify-end">
                  <Button color="info">Trade</Button>
                </TableCell>
              </TableRow>
              <TableRow className="border-b dark:border-gray-700">
                <TableCell
                  scope="row"
                  className="bg-transparent text-xl font-bold text-gray-900 dark:bg-transparent dark:text-white"
                >
                  Dogecoin&nbsp;
                  <span className="text-gray-500 dark:text-gray-400">DOGE</span>
                </TableCell>
                <TableCell className="text-xl font-bold text-gray-900 dark:text-white">
                  $0.153765
                </TableCell>
                <TableCell className="text-sm font-semibold text-green-500">
                  +8.39%
                </TableCell>
                <TableCell className="font-semibold text-gray-900 dark:text-white">
                  $729,729,745,340.82
                </TableCell>
                <TableCell className="flex justify-end">
                  <Button color="info">Trade</Button>
                </TableCell>
              </TableRow>
              <TableRow className="border-b bg-white dark:border-gray-700 dark:bg-gray-900">
                <TableCell
                  scope="row"
                  className="bg-transparent text-xl font-bold text-gray-900 dark:bg-transparent dark:text-white"
                >
                  Polkadot&nbsp;
                  <span className="text-gray-500 dark:text-gray-400">DOT</span>
                </TableCell>
                <TableCell className="text-xl font-bold text-gray-900 dark:text-white">
                  $22.24
                </TableCell>
                <TableCell className="font-semibold text-red-500">
                  -13.17%
                </TableCell>
                <TableCell className="font-semibold text-gray-900 dark:text-white">
                  $21,710,483,995.43
                </TableCell>
                <TableCell className="flex justify-end">
                  <Button color="info">Trade</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <p className="mb-5 text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Sign up now to build your own portfolio for free!
        </p>
        <Button color="info" href="#" className="w-fit">
          Sign Up Now
        </Button>
      </div>
    </section>
  );
}
