{
  description = "adtya.xyz";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    { self
    , nixpkgs
    , flake-utils
    ,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };
        package = pkgs.callPackage ./default.nix { };
        app = pkgs.writeShellScriptBin "app" "${pkgs.merecat}/bin/merecat -n -p 8080 ${package}/share/web";
      in
      {
        formatter = pkgs.nixpkgs-fmt;
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pkgs.zs
          ];
        };
        packages = {
          inherit app;
          default = package;
        };
      }
    );
}
