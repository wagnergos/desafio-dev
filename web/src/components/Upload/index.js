import React, { useRef, useCallback } from 'react';

import { Button } from './styles';

export default function Header() {
  const inputCnabImport = useRef();

  function handleImport() {
    console.log('import');
  }

  const handleBtnClick = useCallback(() => inputCnabImport.current.click(), []);

  return (
    <>
      <Button type="button" onClick={handleBtnClick}>
        Importar CNAB
      </Button>
      <input
        hidden
        ref={inputCnabImport}
        type="file"
        accept=".txt"
        onChange={handleImport}
      />
    </>
  );
}
