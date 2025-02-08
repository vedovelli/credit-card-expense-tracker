import * as React from 'react';

import { Drawer as DrawerPrimitive } from 'vaul';

const Drawer = ({
    shouldScaleBackground = true,
    ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root> & {
    shouldScaleBackground?: boolean;
}) => (
    <DrawerPrimitive.Root
        shouldScaleBackground={shouldScaleBackground}
        {...props}
    />
);
Drawer.displayName = 'Drawer';

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerClose = DrawerPrimitive.Close;

const DrawerContent = React.forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <DrawerPrimitive.Portal>
        <DrawerPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80" />
        <DrawerPrimitive.Content
            ref={ref}
            className="fixed inset-x-0 bottom-0 z-50 mt-24 h-[96%] rounded-t-[10px] bg-white"
            {...props}
        >
            <div className="bg-muted absolute left-1/2 top-3 h-2 w-[100px] -translate-x-1/2 rounded-full" />
            {children}
        </DrawerPrimitive.Content>
    </DrawerPrimitive.Portal>
));
DrawerContent.displayName = 'DrawerContent';

const DrawerHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className="grid gap-1.5 p-4 text-center sm:text-left" {...props} />
);
DrawerHeader.displayName = 'DrawerHeader';

const DrawerFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className="mt-auto flex flex-col gap-2 p-4" {...props} />
);
DrawerFooter.displayName = 'DrawerFooter';

const DrawerTitle = React.forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
    <DrawerPrimitive.Title
        ref={ref}
        className="text-lg font-semibold leading-none tracking-tight"
        {...props}
    />
));
DrawerTitle.displayName = 'DrawerTitle';

const DrawerDescription = React.forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
    <DrawerPrimitive.Description
        ref={ref}
        className="text-muted-foreground text-sm"
        {...props}
    />
));
DrawerDescription.displayName = 'DrawerDescription';

export {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
};
