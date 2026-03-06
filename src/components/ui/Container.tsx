import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType;
    fluid?: boolean;
}

const Container = ({
    children,
    className,
    as: Component = 'div',
    fluid = false,
    ...props
}: ContainerProps) => {
    return (
        <Component
            className={cn(
                'mx-auto w-full',
                fluid ? 'px-4 md:px-6' : 'container',
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
};

export { Container };
