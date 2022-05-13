import React from "react";

export interface CardProps {
    children: React.ReactNode
    className?: string
    title: string
}

export interface CardHeaderProps {
    title: string
    className?: string
}