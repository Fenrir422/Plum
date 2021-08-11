import React, { useState, useEffect} from 'react';
import classes from './Reader.module.css'
import { Document, Page, pdfjs } from "react-pdf";
import samplePDF from '../../../../reader/Harry-Potter-and-the-Methods-of-Rationality.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`




const Reader =({addFragment,...props})=> {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedText, setSelectedText] = useState(false);

  console.log(props, 'reader')
  useEffect (() => {
    document.addEventListener("selectionchange", onMouseUp)
    return () => {document.removeEventListener("selectionchange", onMouseUp)}
  }, [])


  const onMouseUp =()=>{
    setSelectedText(window.getSelection().toString())
}
  const saveSelectedText=()=> {
    addFragment(selectedText)
  }

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className={classes.readerWrapper}>
      <Document
        file={samplePDF}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
      {selectedText?<button onClick={saveSelectedText}>Save Fragment</button>:null}
    </div>
  );
}

export default Reader;