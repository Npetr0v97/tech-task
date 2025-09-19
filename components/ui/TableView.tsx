import React from 'react';
import { TableViewProps } from '@/lib/types/cards';

export default function TableView({
  headers,
  rowLabels,
  data,
  className,
}: TableViewProps) {
  return (
    <div
      className={`overflow-y-auto h-[190px] bg-[var(--black-100)] ${
        className ?? ''
      }`}
    >
      <table className="w-full table-fixed border-collapse text-[0.60rem] sm:text-sm text-center">
        <thead className="bg-[var(--background-gradient)]">
          <tr>
            {headers?.map((header, idx) => (
              <th
                key={idx}
                className={`px-4 font-semibold ${
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
              <td className="px-4 py-2 ml-10 text-left font-semibold text-[var(--typography-secondary)]">
                {rowLabels[rowIdx]}
              </td>
              {row?.map((cell, colIdx) => (
                <td
                  key={colIdx}
                  className={`px-4 py-2 ${
                    colIdx === row?.length - 1 ? 'text-right' : 'text-center'
                  } font-medium text-[var(--typography-active)]`}
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
