import React from "react";

interface DateProps {
  dateString: string;
}

const MyDate: React.FC<DateProps> = (props) => {
  const date = new Date(props.dateString).toISOString().slice(0, 10);
  return <span>{date}</span>;
};

export default MyDate;
