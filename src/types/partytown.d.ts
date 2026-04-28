declare module '@builder.io/partytown/react' {
  import * as React from 'react';

  export interface PartytownReactProps {
    debug?: boolean;
    forward?: string[];
    lib?: string;
    nonce?: string;
    resolveUrl?: (url: URL, location: Location, type: string) => URL | undefined;
    [key: string]: unknown;
  }

  export const Partytown: React.FC<PartytownReactProps>;
}
