import Input from "antd/es/input/Input";

const SearchBar = ({ queryLoad, filter }) => {
  return (
    <Input
      placeholder="Browse Products"
      onChange={filter}
      loading={queryLoad}
      allowClear
    />
  );
};

export default SearchBar;
