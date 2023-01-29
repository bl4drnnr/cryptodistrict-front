import React from 'react';

export interface TextareaProps {
  value: any;
  placeholder: string;
  onError?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
