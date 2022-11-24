import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'

export default function Majlis() {
    const router = useRouter()
    const { majlis } = router.query

  return <p>Post: {majlis}</p>

}