import LaminarGuardian from '../../../../guardians/LaminarGuardian';
import TraderInfoTask from '../../TraderInfoTask';

describe('TraderInfoTask', () => {
  jest.setTimeout(30_000);

  const guardian = new LaminarGuardian('laminar-guardian', {
    network: 'dev',
    networkType: 'laminarChain',
    nodeEndpoint: ['wss://testnet-node-1.laminar-chain.laminar.one/ws'],
    monitors: {},
  });

  it('works', async (done) => {
    const task = new TraderInfoTask({
      account: '5EhUhUxwnR99NAkqSNiDzx5m3wijfVaekaR67BEq5yyj8AhP',
      poolId: 'all',
      period: 30_000,
    });

    const output$ = await task.start(guardian);

    output$.subscribe((output) => {
      console.log(output);
      expect(output).toBeTruthy();
      done();
    });
  });
});
