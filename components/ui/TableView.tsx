'use client';
import React from 'react';
import { TableViewProps } from '@/lib/types/cards';

export default function TableView({
  headers,
  rowLabels,
  data,
  className,
}: TableViewProps) {
  return (
    <div className={`overflow-y-auto bg-[var(--green-950)] ${className ?? ''}`}>
      <table className="w-full table-fixed border-collapse text-center">
        <thead>
          <tr>
            {headers?.map((header, idx) => (
              <th
                key={idx}
                className={`py-1 px-5  font-normal text-xs leading-[12px] text-center align-middle ${
                  idx === headers?.length - 1 ? 'text-right' : ''
                } 
                ${idx === 0 ? 'text-left' : ''}
                text-[var(--typography-secondary)]`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, rowIdx) => (
            <tr key={rowIdx} className="border-t border-[var(--stroke-main)]">
              {/* first column with row label */}
              <td className=" font-normal text-xs leading-[12px]  py-3 text-left pl-5 align-middle text-[var(--typography-secondary)]">
                {rowLabels[rowIdx]}
              </td>
              {row?.map((cell, colIdx) => (
                <td
                  key={colIdx}
                  className={` py-3 font-medium text-xs leading-[12px] align-middle ${
                    colIdx === row?.length - 1
                      ? 'text-right pr-5'
                      : 'text-center'
                  } text-[var(--typography-active)]`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

//required for performance optimization
TableView.displayName = 'TableView';
