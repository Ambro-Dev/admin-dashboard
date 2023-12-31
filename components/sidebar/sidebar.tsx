import React, { useState } from "react";
import { Box } from "../styles/box";
import { Sidebar } from "./sidebar.styles";
import { Avatar, Tooltip } from "@nextui-org/react";
import { Flex } from "../styles/flex";
import { CompaniesDropdown } from "./companies-dropdown";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { CustomersIcon } from "../icons/sidebar/customers-icon";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { DevIcon } from "../icons/sidebar/dev-icon";
import { ViewIcon } from "../icons/sidebar/view-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { FilterIcon } from "../icons/sidebar/filter-icon";
import { useSidebarContext } from "../layout/layout-context";
import { ChangeLogIcon } from "../icons/sidebar/changelog-icon";
import { useRouter } from "next/router";

export const SidebarWrapper = () => {
  const router = useRouter();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <Box
      as="aside"
      css={{
        height: "100vh",
        zIndex: 202,
        position: "sticky",
        top: "0",
      }}
    >
      {collapsed ? <Sidebar.Overlay onClick={setCollapsed} /> : null}

      <Sidebar collapsed={collapsed}>
        <Sidebar.Header>
          <CompaniesDropdown />
        </Sidebar.Header>
        <Flex direction={"column"} justify={"between"} css={{ height: "100%" }}>
          <Sidebar.Body className="body sidebar">
            <SidebarItem
              title="Strona główna"
              icon={<HomeIcon />}
              isActive={router.pathname === "/"}
              href="/"
            />
            <SidebarMenu title="Menu główne">
              <SidebarItem
                isActive={router.pathname === "/accounts"}
                title="Konta"
                icon={<AccountsIcon />}
                href="accounts"
              />
              <SidebarItem
                isActive={router.pathname === "/payments"}
                title="Płaćności"
                icon={<PaymentsIcon />}
              />
              <CollapseItems
                icon={<BalanceIcon />}
                items={["Konta Bankowe", "Karty kredytowe", "Pożyczki"]}
                title="Saldo"
              />

              <SidebarItem
                isActive={router.pathname === "/customers"}
                title="Użytkownicy"
                icon={<CustomersIcon />}
              />
              <SidebarItem
                isActive={router.pathname === "/products"}
                title="Produkty"
                icon={<ProductsIcon />}
              />
              <SidebarItem
                isActive={router.pathname === "/reports"}
                title="Raporty"
                icon={<ReportsIcon />}
              />
            </SidebarMenu>

            <SidebarMenu title="Główne">
              <SidebarItem
                isActive={router.pathname === "/developers"}
                title="Deweloperzy"
                icon={<DevIcon />}
              />
              <SidebarItem
                isActive={router.pathname === "/view"}
                title="Wyświetl stronę"
                icon={<ViewIcon />}
              />
              <SidebarItem
                isActive={router.pathname === "/settings"}
                title="Ustawienia"
                icon={<SettingsIcon />}
              />
            </SidebarMenu>

            <SidebarMenu title="Aktualności">
              <SidebarItem
                isActive={router.pathname === "/changelog"}
                title="Changelog"
                icon={<ChangeLogIcon />}
              />
            </SidebarMenu>
          </Sidebar.Body>
          <Sidebar.Footer>
            <Tooltip content={"Ustawienia"} rounded color="primary">
              <SettingsIcon />
            </Tooltip>
            <Tooltip content={"Dostosowanie"} rounded color="primary">
              <FilterIcon />
            </Tooltip>
            <Tooltip content={"Profil"} rounded color="primary">
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                size={"sm"}
              />
            </Tooltip>
          </Sidebar.Footer>
        </Flex>
      </Sidebar>
    </Box>
  );
};
