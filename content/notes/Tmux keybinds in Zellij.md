---
title: Tmux keybinds in Zellij
tags:
  - seed
created: 2025-12-04
---
I was switching from Tmux to Zellij and want familiar keybindings.

- Go to your Zellij config file: `~/.config/zellij/config.kdl`
- Update your keybinds like this:

```shell
keybinds clear-defaults=true {
    normal {
        // Prefix like tmux
        bind "Ctrl a" { SwitchToMode "tmux"; }
	}
	tmux {
        bind "c" { NewTab; SwitchToMode "Normal"; }  // Create new tab
        // Switch to tabs 1-10 (0 = tab 10)
        bind "1" { GoToTab 1; SwitchToMode "Normal"; }
        bind "2" { GoToTab 2; SwitchToMode "Normal"; }
        bind "3" { GoToTab 3; SwitchToMode "Normal"; }
        bind "4" { GoToTab 4; SwitchToMode "Normal"; }
        bind "5" { GoToTab 5; SwitchToMode "Normal"; }
        bind "6" { GoToTab 6; SwitchToMode "Normal"; }
        bind "7" { GoToTab 7; SwitchToMode "Normal"; }
        bind "8" { GoToTab 8; SwitchToMode "Normal"; }
        bind "9" { GoToTab 9; SwitchToMode "Normal"; }
        bind "0" { GoToTab 10; SwitchToMode "Normal"; }
        // Split pane
        bind "_" { NewPane "down"; SwitchToMode "normal"; }
        bind "|" { NewPane "right"; SwitchToMode "normal"; }
	}
}
```

**Key mappings:**

- `Ctrl+a c` → New tab
- `Ctrl+a 1-9` → Switch tabs
- `Ctrl+a _` → Split down
- `Ctrl+a |` → Split right
