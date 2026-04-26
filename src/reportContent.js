export const reportContent = {
  index: {
    eyebrow: 'Master Report',
    heroTitle: 'Summit Care Windows Server 2022 Enterprise Domain Configuration',
    heroText:
      'A complete implementation report for Summit Care Medical Clinic showing how Windows Server 2022, Active Directory Domain Services, DNS, DHCP, NPS/RADIUS, AD Certificate Services, WDS, Group Policy, Hyper-V, Proxmox, Synology NAS storage, Microsoft Entra hybrid identity, and monitoring were deployed into a practical healthcare network.',
    heroMeta: [
      'Windows Server 2022',
      'Active Directory Domain Services',
      'DNS, DHCP, NPS & AD CS',
      'Hyper-V / Proxmox Lab',
      'M365 SSO & Entra Hybrid ID',
    ],
    stats: [
      { value: '2 DCs', label: 'Primary and backup domain controllers' },
      { value: '802.1X', label: 'WPA3-Enterprise / RADIUS access model' },
      { value: 'GPO', label: 'Security, workstation, certificate, and drive policies' },
      { value: 'VDI', label: 'Virtual desktops for testing and remote work' },
    ],
    cards: [
      {
        title: 'Domain Foundation',
        text: 'Break down the Windows Server 2022 domain, AD DS structure, backup DC, replication, DNS, static addressing, and time hierarchy.',
        href: '/objectives',
      },
      {
        title: 'Core Network Services',
        text: 'Document DHCP scopes, failover behavior, DNS records, domain naming, WDS deployment, Synology NAS, and infrastructure service roles.',
        href: '/deploy',
      },
      {
        title: 'Security & Access',
        text: 'Explain Group Policy, NPS/RADIUS, WPA3-Enterprise, certificate services, auto-enrollment, Entra hybrid identity, and Microsoft 365 SSO.',
        href: '/voip',
      },
      {
        title: 'Operations & Resilience',
        text: 'Cover Proxmox, Hyper-V nested testing, VDI, automated backups, Task Scheduler scripts, monitoring, Event Viewer, SNMP, and final benefits.',
        href: '/hippa',
      },
    ],
    sections: [
      {
        kicker: 'Purpose',
        title: 'A Practical Windows Server Enterprise Build',
        lead:
          'This project is not only a theory discussion. It documents how Summit Care Medical Clinic implemented Windows Server 2022 features into a realistic healthcare domain environment. The goal was to build identity, name resolution, IP addressing, secure Wi-Fi authentication, certificate-based access, software deployment, backup, monitoring, and remote desktop infrastructure from one coordinated server platform.',
      },
      {
        kicker: 'Design Idea',
        title: 'Windows Server As The Clinic Control Plane',
        kind: 'cards',
        items: [
          {
            title: 'Identity',
            body:
              'Active Directory Domain Services gives Summit Care one domain authority for users, computers, groups, service accounts, organizational units, and policy-based access control.',
          },
          {
            title: 'Network Services',
            body:
              'DNS and DHCP turn the domain into a usable network. Workstations receive correct addressing, discover domain controllers, resolve internal tools, and find clinic applications without manual configuration.',
          },
          {
            title: 'Security Services',
            body:
              'NPS, RADIUS, AD Certificate Services, WPA3-Enterprise, 802.1X, auto-enrollment, and Group Policy enforce stronger authentication than shared Wi-Fi passwords or unmanaged local accounts.',
          },
          {
            title: 'Operations',
            body:
              'Task Scheduler, PowerShell scripts, Synology NAS backups, Event Viewer, SNMP monitoring, and secondary domain controller replication keep the environment recoverable and easier to support.',
          },
        ],
        callout:
          'Core principle: every major service was tied back to a real Summit Care workflow, such as onboarding a nurse workstation, securing internal Wi-Fi, locating a database server by DNS name, or restoring access when the primary domain controller is unavailable.',
      },
      {
        kicker: 'Platform',
        title: 'Major Windows Server 2022 Features Implemented',
        kind: 'table',
        columns: ['Feature', 'Summit Care Use', 'Business Benefit'],
        rows: [
          ['AD DS', 'Central domain for users, computers, groups, OUs, and authentication', 'Consistent identity management across the clinic'],
          ['DNS', 'Internal records for domain controllers, web servers, SQL/database tools, file shares, and management systems', 'Reliable service discovery without memorizing IP addresses'],
          ['DHCP', 'Managed scopes, reservations, options, and failover planning', 'Fast workstation onboarding and fewer addressing mistakes'],
          ['NPS/RADIUS', '802.1X and WPA3-Enterprise authentication for office Wi-Fi and wired access', 'Network access tied to real domain users and certificates'],
          ['AD CS', 'Domain computer certificates and auto-enrollment through GPO', 'Certificate-based trust for internal network access'],
          ['WDS', 'Network-based Windows deployment for clinic desktops', 'Faster rebuilds and standardized workstation images'],
          ['Group Policy', 'Security baselines, password rules, drive mappings, firewall, certificate enrollment, Wi-Fi profiles, and logon controls', 'Repeatable security and configuration at scale'],
          ['Windows Time', 'Domain time hierarchy for Kerberos and logs', 'Stable authentication and accurate troubleshooting evidence'],
        ],
      },
      {
        kicker: 'Outcome',
        title: 'What This Project Proves',
        kind: 'split',
        items: [
          {
            title: 'Technical Objectives',
            points: [
              'Deploy a Windows Server 2022 domain while avoiding early Windows Server 2025 bugs and compatibility uncertainty.',
              'Configure a static IP foundation for domain controllers, DNS, DHCP, NPS, certificate services, and server management.',
              'Build a primary and secondary domain controller with replication and recovery planning.',
              'Use Group Policy to secure workstations, automate configuration, distribute certificates, and control access.',
              'Integrate Microsoft Entra hybrid identity for Microsoft 365 SSO and UPN-based sign-in.',
              'Support remote work and testing through virtual desktops, VPN, RDP, and hypervisor-based lab systems.',
            ],
          },
          {
            title: 'Readiness Scores',
            metrics: [
              { label: 'Identity centralization', value: 94 },
              { label: 'Network service reliability', value: 90 },
              { label: 'Security policy coverage', value: 92 },
              { label: 'Recovery and operations maturity', value: 87 },
            ],
          },
        ],
      },
    ],
  },
  objectives: {
    eyebrow: 'Section 1',
    heroTitle: 'Domain Foundation, AD DS, DNS & Domain Controller Design',
    heroText:
      'This section explains the Windows Server 2022 foundation for Summit Care: static IP planning, primary and backup domain controllers, Active Directory structure, DNS records, replication, Windows Time, and the domain services that everything else depends on.',
    sections: [
      {
        title: 'Why Windows Server 2022 Was Selected',
        lead:
          'Summit Care used Windows Server 2022 because it is mature, stable, widely supported, and suitable for enterprise domain services. Windows Server 2025 introduces newer capabilities, but for this project the priority was predictable behavior, clean documentation, broad driver and application compatibility, and fewer version-specific bugs during Active Directory, DHCP, DNS, NPS, and certificate service deployment.',
        kind: 'list',
        items: [
          'Stable platform for Active Directory Domain Services, DNS, DHCP, NPS, AD CS, WDS, and Hyper-V.',
          'Compatible with Microsoft Entra Connect / Cloud Sync planning and Microsoft 365 hybrid identity workflows.',
          'Well documented for domain controller replication, Group Policy, Windows Time, and server hardening.',
          'Reliable choice for a healthcare clinic where downtime affects staff productivity and patient-facing operations.',
        ],
      },
      {
        title: 'Core Server Naming And Addressing',
        kind: 'table',
        columns: ['System', 'Example Name', 'Static IP / Role'],
        rows: [
          ['Primary domain controller', 'SC-DC01', 'Static IP such as 10.40.10.10; AD DS, DNS, DHCP, time source, GPO management'],
          ['Backup domain controller', 'SC-DC02', 'Static IP such as 10.40.10.11; AD DS, DNS, GC, replication partner, failover authentication'],
          ['NPS / RADIUS server', 'SC-NPS01', 'Static server address; RADIUS policy engine for 802.1X and WPA3-Enterprise'],
          ['Certificate authority', 'SC-CA01', 'Enterprise CA for domain certificates and auto-enrollment'],
          ['Deployment server', 'SC-WDS01', 'WDS images and PXE deployment services'],
          ['NAS storage', 'SC-NAS01', 'Synology NAS joined to the domain for backup targets and controlled file storage'],
          ['SQL/database server', 'SC-SQL01', 'Internal DNS record for clinical or administrative database tools'],
          ['Web / tool server', 'SC-WEB01', 'Internal DNS record for intranet portals, documentation, or admin tools'],
        ],
      },
      {
        title: 'Static IP Setup On Domain Controllers',
        kind: 'timeline',
        items: [
          'Assign SC-DC01 a static IP address, subnet mask, default gateway, and DNS pointing first to itself or the intended internal DNS path.',
          'After AD DS and DNS are installed, configure SC-DC01 as the preferred DNS server for domain clients through DHCP option 006.',
          'Assign SC-DC02 a separate static IP address and point DNS to SC-DC01 during promotion, then configure DNS redundancy after replication is healthy.',
          'Exclude all server static addresses from DHCP scopes so clients never receive a domain controller, NAS, NPS, CA, or management IP by accident.',
          'Document every static IP, MAC reservation, DNS name, and service owner so troubleshooting starts from a known source of truth.',
        ],
      },
      {
        title: 'Active Directory Structure',
        lead:
          'AD DS was organized around clinic operations instead of dumping every object into default containers. Summit Care can separate users, computers, servers, admin accounts, service accounts, printers, VDI desktops, and test lab objects into OUs with different policies.',
        kind: 'table',
        columns: ['OU / Group Area', 'Example Objects', 'Policy Purpose'],
        rows: [
          ['Clinic Users', 'Doctors, nurses, front desk, billing, managers', 'Password rules, mapped drives, app access, sign-in restrictions'],
          ['Workstations', 'Office desktops, exam room PCs, admin PCs', 'Firewall, screen lock, endpoint baseline, certificate enrollment, Wi-Fi policy'],
          ['Servers', 'DCs, NPS, CA, WDS, SQL, web tools', 'Server hardening and controlled administrator access'],
          ['VDI Desktops', 'Remote workstations and sandbox machines', 'RDP settings, restricted clipboard/drive redirection where required, test policies'],
          ['Security Groups', 'WiFi_Users, WiFi_Computers, NPS_Admins, VPN_Users, Billing_Staff', 'Role-based access and cleaner GPO targeting'],
          ['Service Accounts', 'Backup, sync, monitoring, deployment accounts', 'Least privilege and documented ownership'],
        ],
      },
      {
        title: 'DNS Implementation',
        kind: 'cards',
        items: [
          {
            title: 'AD-Integrated DNS',
            body:
              'DNS zones were stored in Active Directory so records replicate with the domain. Domain controllers register SRV records that let clients locate LDAP, Kerberos, global catalog, and domain services automatically.',
          },
          {
            title: 'Internal Tool Records',
            body:
              'Summit Care created friendly records for web tools, database systems, SQL services, NAS storage, RADIUS, WDS, and management portals. Staff and admins can use names like sc-web01 or sc-sql01 instead of raw IP addresses.',
          },
          {
            title: 'Forwarders',
            body:
              'External resolution uses controlled forwarders instead of random client DNS. This keeps internal domain lookups local while still allowing approved internet name resolution.',
          },
        ],
      },
      {
        title: 'Backup Domain Controller And Replication',
        kind: 'timeline',
        items: [
          'Install Windows Server 2022 on SC-DC02 and assign static networking.',
          'Join SC-DC02 to the Summit Care domain as a member server.',
          'Promote SC-DC02 to a domain controller and install DNS during promotion.',
          'Verify SYSVOL and NETLOGON shares are present after replication.',
          'Run dcdiag and repadmin /replsummary to confirm directory replication health.',
          'Configure DHCP option 006 to hand out both SC-DC01 and SC-DC02 as DNS servers.',
          'Test login and name resolution with SC-DC01 temporarily unavailable to prove backup authentication behavior.',
        ],
        callout:
          'The backup domain controller is not just a spare server. It protects logon, DNS, Group Policy processing, and domain operations when the primary DC is down for patching, maintenance, or failure recovery.',
      },
      {
        title: 'Windows Time Server',
        kind: 'list',
        items: [
          'The PDC emulator role is treated as the authoritative time source for the domain.',
          'Domain members follow the AD time hierarchy so Kerberos tickets remain valid.',
          'Accurate time also improves Event Viewer correlation, security logs, DHCP lease analysis, NPS authentication logs, and audit investigations.',
          'Routine checks use w32tm /query /status and w32tm /monitor to confirm time health.',
        ],
      },
    ],
  },
  deploy: {
    eyebrow: 'Section 2',
    heroTitle: 'DHCP, DNS Records, WDS, Storage & Core Network Services',
    heroText:
      'This section documents the practical network services: DHCP scopes and failover planning, DNS for internal applications, WDS imaging, Synology NAS storage, backup strategy, and the service layout that keeps Summit Care devices connected.',
    sections: [
      {
        title: 'DHCP Scope Design',
        lead:
          'DHCP was configured so office workstations, VDI clients, phones, printers, and test systems can receive addresses consistently without manual IP mistakes. Static infrastructure such as domain controllers, NAS, NPS, CA, SQL, WDS, and hypervisor management stays outside the dynamic pool.',
        kind: 'table',
        columns: ['DHCP Item', 'Example Configuration', 'Reason'],
        rows: [
          ['Scope network', '10.40.20.0/24 for office clients', 'Separates endpoint addressing from server infrastructure'],
          ['Address pool', '10.40.20.50 through 10.40.20.220', 'Leaves space for static devices and reservations'],
          ['Exclusions', 'Servers, gateways, printers, APs, NAS, hypervisors', 'Prevents lease conflicts with critical systems'],
          ['Option 003 router', '10.40.20.1', 'Sends clients to the correct default gateway'],
          ['Option 006 DNS', '10.40.10.10 and 10.40.10.11', 'Clients use the domain DNS servers'],
          ['Option 015 DNS suffix', 'summitcare.local or chosen internal domain suffix', 'Clients register and search the internal AD namespace'],
          ['Reservations', 'Printers, Wi-Fi controllers, special test systems', 'Keeps important devices predictable while still centrally managed'],
        ],
      },
      {
        title: 'DHCP Failover Planning',
        kind: 'cards',
        items: [
          {
            title: 'Windows DHCP Failover',
            body:
              'Where two Windows DHCP servers are available, failover can be configured in load-balance or hot-standby mode. This allows a partner server to continue leases if the primary DHCP server is unavailable.',
          },
          {
            title: 'Backup Scope Option',
            body:
              'For smaller clinic scenarios, a carefully documented backup DHCP service on the network edge can temporarily serve emergency leases while Windows DHCP is repaired.',
          },
          {
            title: 'Failback Discipline',
            body:
              'When the primary service returns, lease conflicts are avoided by using non-overlapping pools, documented exclusions, and a clear runbook for disabling emergency DHCP before normal service resumes.',
          },
        ],
        callout:
          'DHCP failover is brief in this report because the larger project is the full Windows Server environment, but address availability still matters. If clients cannot get IP addresses, they cannot find DNS, authenticate, print, reach applications, or access patient workflow systems.',
      },
      {
        title: 'DNS For Internal Applications',
        kind: 'table',
        columns: ['Record', 'Example Target', 'Operational Use'],
        rows: [
          ['dc01.summitcare.local', '10.40.10.10', 'Primary domain controller and DNS'],
          ['dc02.summitcare.local', '10.40.10.11', 'Backup domain controller and DNS'],
          ['nas.summitcare.local', '10.40.10.30', 'Synology backup and shared storage'],
          ['sql.summitcare.local', '10.40.10.40', 'Database server or clinical tool backend'],
          ['intranet.summitcare.local', '10.40.10.50', 'Internal web server or documentation portal'],
          ['radius.summitcare.local', '10.40.10.60', 'NPS/RADIUS authentication target'],
          ['wds.summitcare.local', '10.40.10.70', 'Windows Deployment Services server'],
        ],
      },
      {
        title: 'Windows Deployment Services',
        lead:
          'WDS gives Summit Care a controlled way to rebuild or deploy office workstations over the network. Instead of manually installing every desktop, IT can maintain standard boot and install images, join devices to the domain, and apply the correct GPOs after first logon.',
        kind: 'timeline',
        items: [
          'Install the WDS role on a dedicated Windows Server 2022 member server or approved deployment server.',
          'Configure PXE response settings so only approved devices or known support workflows can boot from the network.',
          'Import boot images and install images that match the clinic workstation standard.',
          'Use DHCP options or IP helper configuration depending on network design and VLAN boundaries.',
          'Deploy a test virtual desktop first, then validate domain join, drivers, certificates, GPO application, and software access.',
        ],
      },
      {
        title: 'Synology NAS On The Domain',
        kind: 'cards',
        items: [
          {
            title: 'Domain Integration',
            body:
              'The Synology NAS can join the Active Directory domain so folder permissions are assigned to domain users and groups instead of isolated local NAS accounts.',
          },
          {
            title: 'Backup Target',
            body:
              'Scheduled server backups, exported configuration files, GPO backups, certificate authority backups, scripts, and documentation can be written to protected NAS shares.',
          },
          {
            title: 'Storage Strategy',
            body:
              'NAS storage supports retention, snapshots where available, and separation from the production server disks. It gives Summit Care a recovery location if a VM, virtual disk, or server role is damaged.',
          },
        ],
      },
      {
        title: 'Backup Strategy',
        kind: 'table',
        columns: ['Backup Area', 'Method', 'Recovery Value'],
        rows: [
          ['Domain controllers', 'System state backup and secondary DC replication', 'Recover AD DS, SYSVOL, DNS, and critical domain state'],
          ['Group Policy', 'GPMC backup exports to NAS', 'Restore or compare GPOs after accidental changes'],
          ['DHCP', 'Scheduled export of DHCP configuration and lease data', 'Rebuild scopes, reservations, and options faster'],
          ['AD CS', 'CA database, private key, templates, and configuration backup', 'Preserve certificate trust chain and reissue capability'],
          ['Scripts', 'Task Scheduler scripts copied to NAS and versioned folders', 'Recreate automation after server repair'],
          ['Virtual machines', 'Hypervisor-level backups or exports plus NAS retention', 'Restore VDI, test clients, and service VMs'],
        ],
      },
    ],
  },
  voip: {
    eyebrow: 'Section 3',
    heroTitle: 'Group Policy, NPS/RADIUS, Certificates, 802.1X & Entra SSO',
    heroText:
      'This section explains how Summit Care secured users, computers, Wi-Fi, internal network access, certificates, Microsoft 365 sign-in, and workstation behavior with Group Policy, NPS/RADIUS, AD CS, and Microsoft Entra hybrid identity.',
    sections: [
      {
        title: 'Group Policy Strategy',
        lead:
          'Group Policy is where the Windows Server build becomes action. Summit Care used GPOs to turn domain membership into real configuration enforcement: password rules, workstation lockdown, firewall rules, drive mappings, certificate enrollment, Wi-Fi profiles, RDP controls, Windows Update behavior, and mapped access to clinic resources.',
        kind: 'table',
        columns: ['GPO Type', 'Example Policy', 'Summit Care Purpose'],
        rows: [
          ['Domain security baseline', 'Password policy, account lockout, Kerberos settings', 'Protects accounts from weak passwords and repeated guessing'],
          ['Workstation baseline', 'Screen lock, Windows Defender, firewall, USB/storage controls as required', 'Hardens clinic desktops consistently'],
          ['Certificate auto-enrollment', 'Computer certificates from AD CS', 'Allows trusted domain devices to receive certificates automatically'],
          ['Wi-Fi profile policy', 'WPA3-Enterprise / 802.1X profile assigned to domain computers', 'Connects approved devices to internal Wi-Fi using enterprise authentication'],
          ['Mapped drives', 'Department shares for billing, admin, IT, and clinic staff', 'Gives users the correct storage without manual mapping'],
          ['RDP and remote access', 'Allow RDP only for approved groups and VDI machines', 'Supports remote work while reducing random remote login exposure'],
          ['Local admin control', 'Restrict local Administrators group membership', 'Prevents unmanaged privilege creep on workstations'],
          ['Browser and intranet settings', 'Trusted internal URLs and homepage where useful', 'Points staff to approved internal systems'],
        ],
      },
      {
        title: 'Real GPO Scenario: Secure Office Wi-Fi',
        kind: 'timeline',
        items: [
          'Create a domain security group named WiFi_Domain_Computers and add approved workstation computer objects.',
          'Configure AD CS computer certificate auto-enrollment so domain machines receive certificates without manual installation.',
          'Create a wireless network policy GPO for the office SSID using WPA3-Enterprise or WPA2/WPA3-Enterprise where device support requires compatibility.',
          'Set the authentication method to certificate-based computer authentication or user/computer authentication depending on the access design.',
          'Link the GPO to the Workstations OU and test with a pilot device before broad deployment.',
          'Confirm the device receives the certificate, applies the Wi-Fi profile, and authenticates through NPS/RADIUS.',
          'Use NPS logs and Event Viewer to verify whether access was accepted, rejected, or blocked by certificate/policy mismatch.',
        ],
      },
      {
        title: 'NPS And RADIUS Design',
        kind: 'cards',
        items: [
          {
            title: 'RADIUS Server',
            body:
              'Network Policy Server acts as the RADIUS decision point. Wireless access points, switches, or controllers send authentication requests to NPS, and NPS checks AD users, AD computers, groups, certificates, and policy conditions.',
          },
          {
            title: '802.1X / WPA3-Enterprise',
            body:
              'Instead of one shared Wi-Fi password for everyone, each user or device must authenticate. Access can be removed by disabling an account, removing a group membership, or revoking trust instead of changing a shared key.',
          },
          {
            title: 'Policy Conditions',
            body:
              'Policies can require membership in WiFi_Users or WiFi_Domain_Computers, valid certificates, approved authentication methods, specific NAS clients, and secure constraints.',
          },
        ],
        callout:
          'The security win is simple: the network knows who or what is connecting. A lost shared password no longer grants broad office access because NPS checks identity, group, and certificate trust.',
      },
      {
        title: 'AD Certificate Services',
        kind: 'table',
        columns: ['Certificate Component', 'Configuration', 'Why It Matters'],
        rows: [
          ['Enterprise CA', 'Installed in the domain with controlled administrator access', 'Issues certificates trusted by domain members'],
          ['Computer certificate template', 'Duplicated and scoped for domain computers', 'Lets workstations prove device identity'],
          ['Auto-enrollment GPO', 'Enabled under Public Key Policies', 'Installs and renews certificates automatically'],
          ['NPS server certificate', 'Issued to the NPS/RADIUS server', 'Allows clients to validate the RADIUS server during 802.1X'],
          ['Certificate revocation', 'CRL/AIA paths documented and reachable', 'Prevents broken trust and supports certificate lifecycle management'],
          ['CA backup', 'CA database and private key backed up to protected storage', 'Allows recovery of the certificate authority if the server fails'],
        ],
      },
      {
        title: 'Microsoft Entra Hybrid Identity And SSO',
        lead:
          'Summit Care aligned the on-premises UPN suffix with the verified Microsoft 365 domain so staff can use a clean sign-in format such as user@summitcare.org instead of an internal-only local suffix. Hybrid identity then supports Microsoft 365, Teams, Outlook, OneDrive, and approved cloud applications through SSO.',
        kind: 'timeline',
        items: [
          'Add and verify the public domain in Microsoft Entra ID, such as summitcare.org.',
          'Add the matching UPN suffix in Active Directory Domains and Trusts.',
          'Update user accounts so User Principal Names match the Microsoft 365 sign-in format.',
          'Prepare for Microsoft Entra Connect Sync or Cloud Sync by cleaning duplicate UPN, mail, and proxyAddress attributes.',
          'Sync approved users and groups to Entra ID.',
          'Enable Microsoft 365 SSO features, MFA, Conditional Access, and app assignment according to licensing and policy.',
          'Validate that a clinic user can sign in to Microsoft 365 apps with the same business identity used for domain workflows.',
        ],
      },
      {
        title: 'UPN And Domains And Trusts Configuration',
        kind: 'list',
        items: [
          'Open Active Directory Domains and Trusts on a domain controller or management workstation.',
          'Add the public suffix used for cloud sign-in, such as summitcare.org.',
          'Update users in Active Directory Users and Computers so the UPN suffix matches Microsoft 365.',
          'Document any internal domain suffix separately from the external sign-in suffix to avoid confusion.',
          'Use the same naming plan in onboarding checklists, help desk documentation, and SSO testing.',
        ],
      },
    ],
  },
  hippa: {
    eyebrow: 'Section 4',
    heroTitle: 'Hypervisors, VDI, Automation, Monitoring, Backup & Final Benefits',
    heroText:
      'This closing section explains the operational side of the project: Proxmox as a type 1 hypervisor, Windows Hyper-V and nested testing, virtual desktops, VPN/RDP remote work, Task Scheduler automation, backup scripts, Event Viewer, SNMP, uptime monitoring, and the final value to the clinic.',
    sections: [
      {
        title: 'Type 1 Hypervisor Platform',
        lead:
          'Summit Care used a type 1 hypervisor approach to make the server hardware more valuable. Proxmox can host the primary domain controller, backup domain controller, test clients, virtual desktops, management systems, and sandbox environments without requiring separate physical computers for every role.',
        kind: 'table',
        columns: ['Virtual Workload', 'Purpose', 'Benefit'],
        rows: [
          ['SC-DC01', 'Primary AD DS, DNS, DHCP, GPO management', 'Central identity and network services'],
          ['SC-DC02', 'Backup domain controller and DNS', 'Authentication and DNS continuity'],
          ['SC-NPS01 / SC-CA01', 'RADIUS and certificate services', 'Secure 802.1X and certificate-based access'],
          ['Office desktop VM', 'Standard user workstation', 'Test GPOs, login scripts, Wi-Fi profiles, certificates, and app access'],
          ['VDI remote workstation', 'Remote worker desktop reached by VPN then RDP', 'Gives staff a controlled office desktop without exposing every internal app directly'],
          ['Sandbox VM', 'Patch, script, and configuration testing', 'Reduces risk before changes reach production systems'],
        ],
      },
      {
        title: 'Hyper-V And Nested Virtualization',
        kind: 'cards',
        items: [
          {
            title: 'Windows Hyper-V',
            body:
              'Windows Server can also run Hyper-V for additional lab workloads, nested testing, or isolated Windows client simulations where the project requires Microsoft-native virtualization behavior.',
          },
          {
            title: 'Nested Virtualization',
            body:
              'Nested virtualization allows Summit Care to test Hyper-V inside a virtualized server environment when the hardware and hypervisor settings support it. This is useful for lab validation, training, and safe experimentation.',
          },
          {
            title: 'Virtual Desktop Testing',
            body:
              'A domain-joined virtual desktop acts like an office workstation. It can receive GPOs, certificates, mapped drives, DNS settings, and RDP rules before those changes are pushed to physical clinic machines.',
          },
        ],
      },
      {
        title: 'Remote Work VDI Workflow',
        kind: 'timeline',
        items: [
          'Remote staff authenticate to the approved VPN service using domain identity and MFA where available.',
          'After VPN connection, users RDP into assigned virtual office workstations hosted on the server infrastructure.',
          'The VDI desktop remains inside the clinic network, so internal DNS, mapped drives, printers, and line-of-business tools behave like an office session.',
          'GPOs limit who can RDP, which machines can receive RDP, and what security controls apply to remote desktops.',
          'Logs from VPN, Windows sign-in, RDP, and domain controllers provide an audit trail for troubleshooting and access review.',
        ],
      },
      {
        title: 'Task Scheduler Automation',
        lead:
          'Task Scheduler was used to make routine infrastructure work repeatable. Instead of relying only on memory, Summit Care can run scripts for backups, health checks, log exports, replication checks, and cleanup routines on a schedule.',
        kind: 'table',
        columns: ['Scheduled Task', 'Example Action', 'Why It Helps'],
        rows: [
          ['DHCP backup', 'Export DHCP scope and lease configuration to C drive staging and NAS backup location', 'Faster recovery after DHCP service or server failure'],
          ['GPO backup', 'Run GPMC backup script to protected storage', 'Recover policy objects after accidental changes'],
          ['AD health check', 'Run dcdiag, repadmin summary, and save output', 'Creates routine evidence of domain health'],
          ['NAS copy job', 'Copy script outputs and configuration exports to Synology share', 'Keeps backups off the local server disk'],
          ['Event log export', 'Export key system, security, DNS, DHCP, NPS, and Directory Service logs', 'Supports troubleshooting and audit review'],
          ['Service watchdog', 'Check important services and write alert output', 'Catches stopped services before users report outages'],
        ],
      },
      {
        title: 'Monitoring And Logs',
        kind: 'cards',
        items: [
          {
            title: 'Event Viewer',
            body:
              'Event Viewer is used to review authentication failures, DNS issues, DHCP warnings, NPS accept/reject events, certificate enrollment problems, replication errors, and system service failures.',
          },
          {
            title: 'SNMP',
            body:
              'SNMP monitoring helps observe switches, access points, NAS devices, UPS units, hypervisor hosts, and other infrastructure that affects uptime and performance.',
          },
          {
            title: 'Uptime And Efficiency',
            body:
              'Monitoring focuses on whether users can sign in, get an IP address, resolve names, access apps, connect to Wi-Fi, reach the NAS, and use remote desktops without unnecessary delay.',
          },
        ],
      },
      {
        title: 'Healthcare Security And Operational Benefits',
        kind: 'table',
        columns: ['Area', 'Implemented Control', 'Clinic Benefit'],
        rows: [
          ['Identity', 'AD DS users, groups, OUs, UPN alignment, Entra sync', 'Cleaner onboarding, SSO, and access removal'],
          ['Endpoint security', 'GPO baselines, firewall rules, certificate enrollment', 'Consistent workstation protection'],
          ['Network access', 'NPS/RADIUS, 802.1X, WPA3-Enterprise, certificates', 'No dependency on shared Wi-Fi passwords for internal access'],
          ['Recovery', 'Backup DC, NAS backups, scheduled exports, VM backups', 'Reduced downtime after server or configuration failure'],
          ['Remote work', 'VPN plus RDP into VDI desktops', 'Keeps work inside the controlled clinic environment'],
          ['Auditability', 'Event logs, NPS logs, Entra sign-in logs, scheduled reports', 'Better troubleshooting and compliance evidence'],
        ],
      },
      {
        title: 'Final Summary',
        lead:
          'The completed Summit Care Windows Server 2022 implementation turns a single server environment into a complete enterprise domain platform. Active Directory centralizes identity. DNS makes internal services discoverable. DHCP gives clients reliable addressing. A backup domain controller protects logon and name resolution. Group Policy secures and configures systems at scale. NPS/RADIUS and AD Certificate Services provide enterprise Wi-Fi and certificate-based access. WDS standardizes workstation deployment. Synology NAS storage strengthens backup strategy. Proxmox, Hyper-V, and VDI make the hardware flexible for testing and remote work. Task Scheduler, scripts, Event Viewer, SNMP, and health checks keep operations visible. Microsoft Entra hybrid identity and UPN alignment connect the local domain to Microsoft 365 SSO. The result is a realistic healthcare network that is easier to manage, easier to recover, and significantly more secure than unmanaged workgroup computers or shared-password network access.',
      },
    ],
  },
};
