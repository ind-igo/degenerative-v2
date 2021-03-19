import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'react-feather';
import { SearchForm } from '@/components';
import { MainDisplay, MainHeading, SideDisplay } from '@/components';
import { ISynthMetadata } from '@/types';
import { UserContext } from '@/contexts';
import { useQuery } from 'graphql-hooks';
import { UNISWAP_MARKET_DATA_QUERY } from '@/utils';

const Explore = () => {
  //const { getMarketData } = useContext(UserContext);
  const [availableSynths, setAvailableSynths] = useState([] as ISynthMarketData[]);

  useEffect(() => {
    //setAvailableSynths(getMarketData)
  }, []);

  const SynthBlock: React.FC<ISynthMetadata> = (props) => {
    const { name, expired } = props;

    //const { loading, error, data } = useQuery(UNISWAP_MARKET_DATA_QUERY, {
    //  variables: {
    //    poolAddress:
    //  }
    //});

    // TODO add description and APY
    return (
      <Link to="#" className="padding-8 flex-column-centered radius-xl box-shadow-large text-align-center relative w-inline-block">
        <img src="src/assets/Box-01.png" loading="lazy" alt="" className="width-16" />
        <h5 className="margin-top-4">{name}</h5>
        <p className="text-small opacity-60">Lorem ipsum dolor sit amet, adipiscing</p>
        <div className="button button-small">Earn 75% APY</div>
        <div className="pill absolute-top-right margin-4">New</div>
      </Link>
    );
  };

  return (
    <>
      <MainDisplay>
        <MainHeading>Explore</MainHeading>
        <div className="padding-x-8 flex-row margin-top-4 flex-wrap">
          <SearchForm className="margin-0 margin-right-2 expand portrait-width-full portrait-margin-bottom-2 w-form" />
        </div>
        <div className="padding-x-8 flex-align-baseline"></div>
        <div className="grid-3-columns margin-x-8 margin-top-4">{}</div>
      </MainDisplay>
      <SideDisplay></SideDisplay>
    </>
  );
};

export default Explore;
