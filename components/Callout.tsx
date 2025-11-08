import React from "react";

type CalloutProps = {
  title?: string;
  children: React.ReactNode;
};

export default function Callout({ title, children }: CalloutProps) {
  return (
    <div className="border-l-4 border-indigo-500 bg-indigo-50/40 p-4 rounded-md my-6">
      {title && <h4 className="font-semibold text-lg mb-2">{title}</h4>}
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}
