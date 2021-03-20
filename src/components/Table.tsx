import React from 'react';

export interface TableProps {
  title?: string;
  headers: string[];
  headerClass?: string[]; // Custom CSS for a column, based on index
  className?: string; // CSS for table itself
}

export const Table: React.FC<TableProps> = ({ title, headers, headerClass, className, children }) => {
  if (headerClass && headerClass.length !== headers.length) throw new Error('Header class prop is invalid');

  return (
    <div className="margin-top-8">
      {title && <h5 className="padding-x-8">{title}</h5>}
      <div className={`flex-align-baseline text-xs padding-x-4 margin-x-4 margin-top-4 margin-bottom-3 ${className}`}>
        {headers.map((header, index) => {
          return (
            <div className={headerClass && headerClass[index] ? headerClass[index] : 'expand flex-align-center'} key={index}>
              <div className="margin-right-1">{header}</div>
            </div>
          );
        })}
      </div>
      {children}
    </div>
  );
};

// TODO Make a generic composable table + table row + table cells
export interface TableCellProps {
  className?: string;
}

export const TableCell: React.FC<TableCellProps> = ({ className, children }) => {
  return <div className={`${className ? className : 'expand'}`}>{children}</div>;
};
