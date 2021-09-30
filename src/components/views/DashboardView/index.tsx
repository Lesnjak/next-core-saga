// ! Delete this comment or delete component if its doesn't use
import { FC, useMemo, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { INPUT_ONLY_NUMBER_REGEXP } from '../../../configs/regexps.config';
import { Table } from '../../common/table/Table';
import { Input } from '../../common/ui/Input';
import { ExampleForm } from './examples/ExampleForm';
import { ExampleViewCard } from './examples/ExampleViewCard';
import { InfiniteScrollExampleSmart } from './examples/InfiniteScrollExampleSmart';
import { ModalFlowExampleSmart } from './examples/ModalFlowExampleSmart';
import { NotificationExample } from './examples/NotificationExample';
import { PaginationExampleSmart } from './examples/PaginationExampleSmart';
import { SimpleModalSmart } from './examples/SimpleModalSmart';
import { SimpleStateSmart } from './examples/SimpleStateSmart';
import styles from './styles.module.scss';

export const DashboardView: FC = () => {
  const [inputValue, setInputValue] = useState('');

  const tableData = useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    []
  );
  const tableColumns = useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
    ],
    []
  );

  return (
    <div className={styles.dashboardView}>
      <Tabs>
        <TabList>
          <Tab>Other components</Tab>
          <Tab>Example form</Tab>
          <Tab>Example table</Tab>
        </TabList>

        <TabPanel>
          <div className={styles.dashboardView__containerWrapper}>
            <ExampleViewCard title="Working with state">
              <SimpleStateSmart />
            </ExampleViewCard>

            <ExampleViewCard title="Working with simple modal">
              <SimpleModalSmart />
            </ExampleViewCard>

            <ExampleViewCard title="Working with modal flow">
              <ModalFlowExampleSmart />
            </ExampleViewCard>

            <ExampleViewCard title="Working with notification">
              <NotificationExample />
            </ExampleViewCard>

            <ExampleViewCard title="Input number example">
              <Input
                placeholder="Enter your test value"
                onChange={(e) => setInputValue(e.target.value)}
                pattern={INPUT_ONLY_NUMBER_REGEXP}
                value={inputValue}
                name="test"
                id="form-test-input-type-number"
              />
            </ExampleViewCard>

            <ExampleViewCard title="Working with pagination">
              <PaginationExampleSmart />
            </ExampleViewCard>

            <ExampleViewCard title="Infinite scroll example">
              <InfiniteScrollExampleSmart />
            </ExampleViewCard>
          </div>
        </TabPanel>

        <TabPanel>
          <ExampleForm onSubmit={(values) => console.debug(values)} />
        </TabPanel>

        <TabPanel>
          <Table data={tableData} columns={tableColumns} />
        </TabPanel>
      </Tabs>
    </div>
  );
};
