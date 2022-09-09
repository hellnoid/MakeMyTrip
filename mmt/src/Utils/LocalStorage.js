import { CompressOutlined } from "@mui/icons-material";

export const getValue = (key) => {
  try {
    let value = localStorage.getItem(key);
    let parsedValue = JSON.parse(value);
    console.log("Local Storage  ", parsedValue);
    return parsedValue;
  } catch (error) {
    return undefined;
  }
};

export const updateValue = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
