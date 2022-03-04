import React, { useState } from 'react';
import ProfileTab, { TabName } from '../../containers/clients/tab/profile-tab';
import AdditionalHeader from '../../components/layout/additional-header';
import MainSection from '../../components/layout/main-section';
import ClientInfo from '../../components/client-info';
import Footer from '../../components/footer';
import ProInsights from '../../containers/clients-profile/pro-insights';
import Preferences from '../../containers/clients-profile/preferences';
import DetailsSection from '../../containers/clients-profile/details';
import ActionsSection from '../../containers/clients-profile/action-section';
import Activity from '../../containers/clients-profile/activity';
import PropertiesJobs from '../../containers/clients-profile/properties-jobs';
import Notes from '../../containers/clients-profile/notes';

function ClientProfile(): JSX.Element {
  const [tab, setTab] = useState<TabName>('overview');

  const activePage = () => {
    let Component;
    switch (tab) {
      case 'overview':
        Component = Activity;
        break;
      case 'properties':
        Component = PropertiesJobs;
        break;
      case 'notes':
        Component = Notes;
        break;
      default:
    }
    return <Component />;
  };

  return (
    <>
      <AdditionalHeader className="sticky md:static top-0">
        <ClientInfo
          id={12050}
          name="Beth Johnson"
          balance={300.00}
          className="block md:hidden"
        />
        <ProfileTab activeTab={tab} handler={setTab} />
      </AdditionalHeader>
      <MainSection className="flex-col md:flex-row">
        <div className="hidden md:flex flex-col min-w-[350px] mr-12 ">
          <ClientInfo
            id={12050}
            name="Beth Johnson"
            balance={300.00}
            className="hidden md:block"
          />
          <ProInsights />
          <Preferences className="md:mt-[26px]" />
          <DetailsSection />
          <ActionsSection className="mt-6" />
        </div>
        {activePage()}
        <ProInsights className="block md:hidden" />
        <Preferences className="block md:hidden md:mt-[26px]" />
        <DetailsSection className="block md:hidden" />
        <ActionsSection className="block md:hidden mt-6" />
      </MainSection>
      <Footer />
    </>
  );
}

// export async function getStaticPaths() {
//   // Return a list of possible value for id
// }
//
// export async function getStaticProps({ params }: any) {
//   console.log(params);
//   // Fetch necessary data for the blog post using params.id
// }

export default ClientProfile;
