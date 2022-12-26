import React from "react";
import { useRouter } from "next/router";

export default function TestId() {
    const { query } = useRouter();
    
    return (
        <h1> Test show: {JSON.stringify(query)} </h1>
    )
}
