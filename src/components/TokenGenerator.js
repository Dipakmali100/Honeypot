import React, { useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { PDFDocument, PageSizes } from "pdf-lib";

function TokenGenerator() {
    const [filename, setFilename] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    async function generateFile() {
        try {
            // Create a new PDF document
            const pdfDoc = await PDFDocument.create();

            // Add a blank page to the document
            const page = pdfDoc.addPage(PageSizes.A4);
            const pdf = ('../assets/get_ip.sh');
            // Serialize the PDFDocument to bytes
            const pdfBytes = await pdfDoc.save();

            // Convert the bytes to a Blob
            const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });

            // Create a download link for the PDF
            const downloadLink = document.createElement("a");
            downloadLink.href = URL.createObjectURL(pdfBlob);
            downloadLink.download = `${filename}.pdf`;

            // Append the download link to the document body and trigger the download
            document.body.appendChild(downloadLink);
            downloadLink.click();

            // Clean up
            document.body.removeChild(downloadLink);
        } catch (error) {
            console.error("Error generating PDF:", error);
        }
    }

    function checkHistory() {
        navigate("/token-history", { state: { file: filename } });
    }

    return ( <
        div className = "token-generator" >
        <
        Header / >
        <
        div className = "formbold-main-wrapper" >
        <
        div className = "formbold-form-wrapper" > { /* <img src={image} alt="" /> */ }

        <
        form action = ""
        method = "POST" >
        <
        div className = "formbold-form-title-manually" >
        <
        h2 className = "" > Token Generator < /h2> <
        /div>

        <
        div className = "formbold-mb-3" >
        <
        label htmlFor = "purpose"
        className = "formbold-form-label" >
        Select your Token <
        /label> <
        select name = "purpose"
        id = "purpose"
        className = "formbold-form-input" >
        <
        option value = "" > Select Your Token Type < /option> <
        option value = "Option 1" > PDF Token < /option> {
            /* <option value="Option 2">DOCX Token</option>
                            <option value="Option 3">XLSX Token </option> */
        } <
        /select> <
        /div>

        <
        div className = "formbold-mb-3" >
        <
        label htmlFor = "address"
        className = "formbold-form-label" >
        Name Token <
        /label> <
        input type = "text"
        name = "address"
        id = "address"
        className = "formbold-form-input"
        onChange = {
            (e) => setFilename(e.target.value) }
        /> <
        /div>

        <
        div className = "formbold-mb-3" >
        <
        label htmlFor = "address"
        className = "formbold-form-label" >
        Remind note when this token is triggered <
        /label> <
        input type = "text"
        name = "address"
        id = "address"
        className = "formbold-form-input"
        onChange = {
            (e) => setMsg(e.target.value) }
        /> <
        /div>

        <
        div className = "token-generator-btn" >
        <
        Link to = "/token-generator" >
        <
        button className = "formbold-btn"
        onClick = {
            () => generateFile() } >
        Generate and Download <
        /button> <
        /Link> <
        /div> <
        div className = "token-generator-bottom-link" >
        <
        p onClick = {
            () => checkHistory() } > Check History < /p> <
        /div> <
        /form> <
        /div> <
        /div> <
        /div>
    );
}

export default TokenGenerator;