'use client';

import { useState, useEffect } from 'react';

interface EditableTextProps {
  value: string;
  onChange: (value: string) => void;
  tagName?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'label' | 'div';
  className?: string;
  placeholder?: string;
}

function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function EditableText({
  value,
  onChange,
  tagName: Tag = 'p',
  className = '',
  placeholder = 'Click to edit...',
}: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleBlur = () => {
    setIsEditing(false);
    onChange(localValue);
  };

  if (isEditing) {
    return (
      <textarea
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        onBlur={handleBlur}
        autoFocus
        className={`${className} bg-yellow-100/20 border-2 border-yellow-400 rounded px-2 py-1 min-h-[60px] resize-y w-full`}
        placeholder={placeholder}
      />
    );
  }

  return (
    <Tag
      onClick={() => setIsEditing(true)}
      className={`${className} cursor-pointer hover:bg-yellow-100/10 rounded px-1 -mx-1 transition-colors inline-block min-h-[1.5em]`}
      title="Click to edit"
    >
      {value ? <span dangerouslySetInnerHTML={{ __html: sanitizeHtml(value) }} /> : <span className="text-gray-400 italic">{placeholder}</span>}
    </Tag>
  );
}

interface EditableInputProps {
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email' | 'tel' | 'url';
  className?: string;
  placeholder?: string;
}

export function EditableInput({
  value,
  onChange,
  type = 'text',
  className = '',
  placeholder = 'Click to edit...',
}: EditableInputProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleBlur = () => {
    setIsEditing(false);
    onChange(localValue);
  };

  if (isEditing) {
    return (
      <input
        type={type}
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        onBlur={handleBlur}
        autoFocus
        className={`${className} bg-yellow-100/20 border-2 border-yellow-400 rounded px-2 py-1 w-full`}
        placeholder={placeholder}
      />
    );
  }

  return (
    <span
      onClick={() => setIsEditing(true)}
      className={`${className} cursor-pointer hover:bg-yellow-100/10 rounded px-1 -mx-1 transition-colors inline-block`}
      title="Click to edit"
    >
      {value || <span className="text-gray-400 italic">{placeholder}</span>}
    </span>
  );
}
