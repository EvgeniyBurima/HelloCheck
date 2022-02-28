import Button from '../components/button/Button';
import MainLayout from '../components/layout/main';
import ClientsTable from '../components/table/clients-table';

function Clients(): JSX.Element {
  return (
    <MainLayout>
      <div className="flex justify-between w-full px-2">
        <h2 className="text-3xl font-medium text-steel-800">Clients</h2>
        <Button text="new" icon="plus" color="white" />
      </div>
      <div className="text-steel-300 space-x-4 self-start pt-4 px-2 pb-1">
        <span className="text-steel-800 border-b-[1px] border-steel-800 pb-1">Active</span>
        <span>Archived</span>
        <span>All Clients</span>
      </div>
      <ClientsTable />
    </MainLayout>
  );
}

export default Clients;
