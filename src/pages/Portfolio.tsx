import React, { useContext } from 'react';

import { EthereumContext, UserContext } from '@/contexts';

import { MainDisplay, MainHeading, SideDisplay, ConnectWallet } from '@/components';
import { Link } from 'react-router-dom';

import { ISynthData, IMintedPosition } from '@/types';

interface PortfolioTableProps {
  title: string;
  headers: string[];
}

interface MintedRowProps {
  imgLocation: string; // TODO move to ISynthInfo type
  synthInfo: ISynthData;
  mintedPosition: IMintedPosition;
}

const Portfolio = () => {
  const { account } = useContext(EthereumContext);
  const { mintedPositions } = useContext(UserContext);

  const MintedTableRow: React.FC<MintedRowProps> = (props) => {
    const { type, cycle, year, collateral, token } = props.synthInfo;
    const { tokenName, tokenAmount, collateralName, collateralAmount, collateralRatio } = props.mintedPosition;

    return (
      <Link to={`/synths/${type}/${cycle}${year}`} className="table-row margin-y-2 w-inline-block">
        <div className="flex-align-center expand">
          <div className="width-10 height-10 flex-align-center flex-justify-center radius-full background-white-50 margin-right-2">
            <img src={props.imgLocation} alt={tokenName} />
          </div>
          <div>
            <div className="margin-right-1 text-color-4">{tokenName}</div>
            <div className="text-xs opacity-50">{`${cycle} ${year}`}</div>
          </div>
        </div>
        <div className="expand">
          <div className="text-color-4">$1,000{/* TODO Placeholder */}</div>
          <div className="text-xs opacity-50">{`${tokenAmount} ${tokenName}`}</div>
        </div>
        <div className="expand">
          <div className="text-color-4">$10,500{/* TODO Placeholder */}</div>
          <div className="text-xs opacity-50">{`${collateralAmount} ${collateralName}`}</div>
        </div>
        <div className="expand">
          <div className="text-color-4">{`${collateralRatio}`}</div>
          <div className="gauge horizontal overflow-hidden">
            <div className="collateral"></div>
            <div className="debt horizontal">
              <div className="gradient horizontal"></div>
            </div>
            <div className="gcr horizontal"></div>
            <div className="liquidation-point horizontal"></div>
          </div>
        </div>
      </Link>
    );
  };

  const PortfolioTable: React.FC<PortfolioTableProps> = ({ title, headers }) => {
    return (
      <div className="margin-top-8">
        <h5 className="padding-x-8">{title}</h5>
        <div className="flex-align-baseline text-xs padding-x-4 margin-x-4 margin-top-4 margin-bottom-3">
          {headers.map((header, index) => {
            return (
              <div className="expand flex-align-center" key={index}>
                <div className="margin-right-1">{header}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const PortfolioView: React.FC = () => {
    console.log(mintedPositions);
    return (
      <ul>
        {mintedPositions.map((element, index) => {
          return <li key={index}>{element.tokenName}</li>;
        })}
      </ul>
    );
  };

  return (
    <>
      <MainDisplay>
        <MainHeading>Your Positions</MainHeading>
        <div className="padding-x-8 flex-align-baseline"></div>
        <PortfolioTable title="Synths Minted" headers={['Token', 'Balance', 'Collateral', 'Utilization', 'Actions']}></PortfolioTable>
        <ConnectWallet />
        <PortfolioView />
      </MainDisplay>
      <SideDisplay></SideDisplay>
    </>
  );
};

export default Portfolio;
