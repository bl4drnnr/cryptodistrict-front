import React from 'react';

export interface InputProps {
  value: any;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  onError?: boolean;
}
