import React from 'react';
import { Spin, Table, TableProps } from "antd";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const TableCustom: React.FC<{dataSource: any; columns: any}> = ({ dataSource, columns }) => {
  const [loading, setLoading] = React.useState(true);
  const [dataSourceTable, setDataSourceTable] = React.useState([]);
  const [columnsTable, setColumnsTable] = React.useState([]);

  React.useEffect(() => {
    if (dataSource && columns) {
      setDataSourceTable(dataSource);
      setColumnsTable(columns);
      setLoading(false);
    }
  }, [dataSource, columns]);

  return (
    <Table
      loading={loading}
      dataSource={dataSourceTable}
      columns={columnsTable}
      showSorterTooltip={{ target: 'sorter-icon' }}
    />
  );
}

export default TableCustom;
