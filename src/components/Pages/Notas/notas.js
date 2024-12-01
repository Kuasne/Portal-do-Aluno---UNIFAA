import React from "react";

const Notas = () => {
  return (
    <div className="notas p-6">
      <h2 className="text-2xl font-bold mb-4">Notas</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-teal-600 text-white">
            <th className="py-2 px-4 border-b">Disciplina</th>
            <th className="py-2 px-4 border-b">Nota</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b">Matemática</td>
            <td className="py-2 px-4 border-b">8.5</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b">História</td>
            <td className="py-2 px-4 border-b">9.0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Notas;
