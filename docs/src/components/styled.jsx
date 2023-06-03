import React from "react";

export const NavLinkItem = ({ children, ...rest }) => (
  <a {...rest} className='py-2 w-32 flex items-center justify-center text-base use-text-color cursor-pointer'>
    {children}
  </a>
)