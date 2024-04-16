{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react'
import Link from 'next/link'

// TODO: import { Header } from '../../../payload/payload-types'
import { fetchHeader } from '../../_api/fetchGlobals'
import HeaderComponent from './HeaderComponent'

export async function Header() {
  // TODO: let header: Header | null = null

  /*
  try {
    header = await fetchHeader()
  } catch (error) {
    console.log(error)
  }
  */

  return (
    <>
      {/* TODO: <HeaderComponent header={header} /> */}
    </>
  )
}