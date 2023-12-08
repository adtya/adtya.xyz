{ stdenvNoCC, zs }:
stdenvNoCC.mkDerivation rec {
  name = "adtya_xyz";
  version = "2023-12-09";
  src = ./.;

  nativeBuildInputs = [ zs ];

  buildPhase = ''
    zs build
  '';

  installPhase = ''
    mkdir -p $out/share
    cp -r .pub $out/share/web
  '';
}
