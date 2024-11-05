import CreatableSelect from "react-select/creatable";


const MultiSelect = ({ field, form, options, placeholder }) => {

  function onChange(option) {
    form.setFieldValue(
      field.name,
      option ? option.map((item) => item.value) : []
    );
  }

  return (
    <CreatableSelect
      name={field.name}
      onBlur={field.onBlur}
      onChange={onChange}
      getNewOptionData={(inputValue, optionLabel) => ({
        value: inputValue,
        label: optionLabel,
      })}
      options={options}
      components={{
        ClearIndicator: ()=>null,
        IndicatorSeparator: () => null,
        DropdownIndicator: () => null,
      }}
      isClearable
      isMulti={true}
      placeholder={placeholder}
      styles={{
        control: (styles) => ({
          ...styles,
          boxShadow: "none",
          width: "100%",
          borderRadius: "10px",
          borderColor: "transparent",
          backgroundColor: "transparent",
          outline: "none !important",
          ":hover": { borderColor: "transparent" },
        }),
        placeholder: (styles) => ({
          ...styles,
          fontSize: "12px",
          fontWeight: "500",
          fontFamily: "Montserrat",
          lineHeight: "19px",
          color: "#A4A4A4",
        }),
        // clearIndicator: (styles) => ({ ...styles, color: "#686868" }),
        container: (styles) => ({ ...styles, width: "100%" }),
        input: (styles) => ({
          ...styles,
          color: "#686868",
          fontSize: "12px",
          fontWeight: "500",
          lineHeight: "19px",
          fontFamily: "Montserrat",
        }),
        option: (styles, { isFocused, isSelected }) => ({
          ...styles,
          backgroundColor: "transparent",
          fontWeight: !isFocused ? "500" : "700",
          fontSize: "12px",
          cursor: "pointer",
          padding: "4px 8px ",
          color: "#686868",
          ":hover": { background: "transparent" },
          ":active": { background: "transparent" },
        }),
        menu: (styles) => ({
          ...styles,
          padding: "8px",
          width: "50%",
          top: "-10px",
          right: "-10px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          border: "2px solid #958060",
        }),
        menuList: (styles) => ({
          ...styles,
          maxHeight: "130px",
          "::-webkit-scrollbar": {
            width: "0px",
            height: "0px",
          },
          "::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "::-webkit-scrollbar-thumb": {
            background: "transparent",
            borderRadius: "4px",
          },
          "::-webkit-scrollbar-thumb:hover": {
            background: "transparent",
          },
        }),
        multiValue: (styles) => ({
          ...styles,
          backgroundColor: "#958060",
          color: "#F7F7F7",
          borderRadius: "10px",
          ":hover": { backgroundColor: "#604B2B" },
        }),
        multiValueLabel: (styles) => ({
          ...styles,
          color: "#F7F7F7",
          fontSize: "12px",
          fontWeight: "500",
          lineHeight: "19px",
          fontFamily: "Montserrat",
        }),
        multiValueRemove: (styles) => ({
          ...styles,
          ":hover": { backgroundColor: "#958060" },
        }),
        valueContainer: (styles) => ({
          ...styles,
          padding: 0,
        }),
      }}
    />
  );
};

export default MultiSelect;
