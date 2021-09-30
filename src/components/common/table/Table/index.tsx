/* eslint-disable react/jsx-key */
// ! Delete this comment or delete component if its doesn't use
import { FC } from 'react';
import { useSortBy, useTable } from 'react-table';

import styles from './styles.module.scss';

type Props = {
  columns: Array<any>;
  data: Array<any>;
};

export const Table: FC<Props> = (props) => {
  const { data, columns } = props;

  const tableInstance = useTable({ columns, data }, useSortBy);
  const { getTableBodyProps, getTableProps, headerGroups, prepareRow, rows } =
    tableInstance;

  return (
    <div className={styles.tableWrapper}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
