import { ComponentPropsWithRef, ElementType, ReactNode } from "react";

export type ChildrenProps = {
  children: ReactNode;
};

export type CreateProps<
  TElement extends ElementType<any>,
  TProps = {}
> = ComponentPropsWithRef<TElement> & TProps & ChildrenProps;

export type CreatePropsWithoutChildren<
  TElement extends ElementType<any>,
  TProps = {}
> = ComponentPropsWithRef<TElement> & TProps;
