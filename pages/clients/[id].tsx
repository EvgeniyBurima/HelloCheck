import React from 'react';
import ProfileTab from '../../containers/clients/tab/profile-tab';
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

function ClientProfile(): JSX.Element {
  return (
    <>
      <AdditionalHeader>
        <ClientInfo
          id={12050}
          name="Beth Johnson"
          balance={300.00}
          className="block md:hidden"
        />
        <ProfileTab />
      </AdditionalHeader>
      <MainSection direction="row">
        <div className="hidden md:flex flex-col min-w-[350px] mr-12 ">
          <ClientInfo
            id={12050}
            name="Beth Johnson"
            balance={300.00}
            className="hidden md:block"
          />
          <ProInsights />
          <Preferences />
          <DetailsSection />
          <ActionsSection className="mt-6" />
        </div>
        <Activity />
        {/*<PropertiesJobs />*/}
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
