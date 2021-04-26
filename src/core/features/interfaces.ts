import { FC } from 'react';

export type ChildrenRender = FC<{
    onClick?: () => void
}>

export type InDevelopingProps = {
    children: ChildrenRender,
}
